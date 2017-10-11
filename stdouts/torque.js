/root/Targets/torque.js
└─┬ torque.js@2.16.2 
  └── carto@0.15.1-cdb4  (git://github.com/cartodb/carto.git#cbe66020f98647429d2bb04b7cf73dcf194f2abf)

Setup Done exists, not setting up
:../FeatureTester/libs/:/root/Targets/torque.js/node_modules
Set Default Z3_PATH to ./node_modules/z3javascript/bin/libz3.so
ExpoSE Master: /root/ExpoSE/lib/Harness/src/harness.js max concurrent: 16 max paths: 1000000
Setting timeout to 900000
*** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [0 done /0 queued / 1 running / 0 errors / 0% coverage ] ****** [1 done /0 queued / 0 running / 1 errors / 63% coverage ] ***
*-- Stat Module Output --*
*-- concretizations: ["defineProperty","bound log","parseInt","call","pow","join","RegExp","sort"]
*-- Stat Module Done --*
*-- Test Case {"_bound":0} start 0.0574 took 26.7054s
*-- Errors occured in test {"_bound":0}
* Error: Tropigate failed because SyntaxError: Unexpected token (2:4) on program (function(tree) {
var assert = require('assert'),
    _ = global._ || require('underscore');

// A definition is the combination of a selector and rules, like
// #foo {
//     polygon-opacity:1.0;
// }
//
// The selector can have filters
tree.Definition = function Definition(selector, rules) {
    this.elements = selector.elements;
    assert.ok(selector.filters instanceof tree.Filterset);
    this.rules = rules;
    this.ruleIndex = {};
    for (var i = 0; i < this.rules.length; i++) {
        if ('zoom' in this.rules[i]) this.rules[i] = this.rules[i].clone();
        this.rules[i].zoom = selector.zoom;
        this.ruleIndex[this.rules[i].updateID()] = true;
    }
    this.filters = selector.filters;
    this.zoom = selector.zoom;
    this.frame_offset = selector.frame_offset;
    this.attachment = selector.attachment || '__default__';
    this.specificity = selector.specificity();
};

tree.Definition.prototype.toString = function() {
    var str = this.filters.toString();
    for (var i = 0; i < this.rules.length; i++) {
        str += '\n    ' + this.rules[i];
    }
    return str;
};

tree.Definition.prototype.clone = function(filters) {
    if (filters) assert.ok(filters instanceof tree.Filterset);
    var clone = Object.create(tree.Definition.prototype);
    clone.rules = this.rules.slice();
    clone.ruleIndex = _.clone(this.ruleIndex);
    clone.filters = filters ? filters : this.filters.clone();
    clone.attachment = this.attachment;
    return clone;
};

tree.Definition.prototype.addRules = function(rules) {
    var added = 0;

    // Add only unique rules.
    for (var i = 0; i < rules.length; i++) {
        if (!this.ruleIndex[rules[i].id]) {
            this.rules.push(rules[i]);
            this.ruleIndex[rules[i].id] = true;
            added++;
        }
    }

    return added;
};

// Determine whether this selector matches a given id
// and array of classes, by determining whether
// all elements it contains match.
tree.Definition.prototype.appliesTo = function(id, classes) {
    for (var i = 0, l = this.elements.length; i < l; i++) {
        var elem = this.elements[i];
        if (!(elem.wildcard ||
            (elem.type === 'class' && classes[elem.clean]) ||
            (elem.type === 'id' && id === elem.clean))) return false;
    }
    return true;
};

function symbolizerName(symbolizer) {
    function capitalize(str) { return str[1].toUpperCase(); }
    return symbolizer.charAt(0).toUpperCase() +
           symbolizer.slice(1).replace(/\-./, capitalize) + 'Symbolizer';
}

// Get a simple list of the symbolizers, in order
function symbolizerList(sym_order) {
    return sym_order.sort(function(a, b) { return a[1] - b[1]; })
        .map(function(v) { return v[0]; });
}

tree.Definition.prototype.symbolizersToXML = function(env, symbolizers, zoom) {
    var xml = zoom.toXML(env).join('') + this.filters.toXML(env);

    // Sort symbolizers by the index of their first property definition
    var sym_order = [], indexes = [];
    for (var key in symbolizers) {
        indexes = [];
        for (var prop in symbolizers[key]) {
            indexes.push(symbolizers[key][prop].index);
        }
        var min_idx = Math.min.apply(Math, indexes);
        sym_order.push([key, min_idx]);
    }

    sym_order = symbolizerList(sym_order);
    var sym_count = 0;

    for (var i = 0; i < sym_order.length; i++) {
        var attributes = symbolizers[sym_order[i]];
        var symbolizer = sym_order[i].split('/').pop();

        // Skip the magical * symbolizer which is used for universal properties
        // which are bubbled up to Style elements intead of Symbolizer elements.
        if (symbolizer === '*') continue;
        sym_count++;

        var fail = tree.Reference.requiredProperties(symbolizer, attributes);
        if (fail) {
            var rule = attributes[Object.keys(attributes).shift()];
            env.error({
                message: fail,
                index: rule.index,
                filename: rule.filename
            });
        }

        var name = symbolizerName(symbolizer);

        var selfclosing = true, tagcontent;
        xml += '    <' + name + ' ';
        for (var j in attributes) {
            if (symbolizer === 'map') env.error({
                message: 'Map properties are not permitted in other rules',
                index: attributes[j].index,
                filename: attributes[j].filename
            });
            var x = tree.Reference.selector(attributes[j].name);
            if (x && x.serialization && x.serialization === 'content') {
                selfclosing = false;
                tagcontent = attributes[j].ev(env).toXML(env, true);
            } else if (x && x.serialization && x.serialization === 'tag') {
                selfclosing = false;
                tagcontent = attributes[j].ev(env).toXML(env, true);
            } else {
                xml += attributes[j].ev(env).toXML(env) + ' ';
            }
        }
        if (selfclosing) {
            xml += '/>\n';
        } else if (typeof tagcontent !== "undefined") {
            if (tagcontent.indexOf('<') != -1) {
                xml += '>' + tagcontent + '</' + name + '>\n';
            } else {
                xml += '><![CDATA[' + tagcontent + ']]></' + name + '>\n';
            }
        }
    }
    if (!sym_count || !xml) return '';
    return '  <Rule>\n' + xml + '  </Rule>\n';
};

// Take a zoom range of zooms and 'i', the index of a rule in this.rules,
// and finds all applicable symbolizers
tree.Definition.prototype.collectSymbolizers = function(zooms, i) {
    var symbolizers = {}, child;

    for (var j = i; j < this.rules.length; j++) {
        child = this.rules[j];
        var key = child.instance + '/' + child.symbolizer;
        if (zooms.current & child.zoom &&
           (!(key in symbolizers) ||
           (!(child.name in symbolizers[key])))) {
            zooms.current &= child.zoom;
            if (!(key in symbolizers)) {
                symbolizers[key] = {};
            }
            symbolizers[key][child.name] = child;
        }
    }

    if (Object.keys(symbolizers).length) {
        zooms.rule &= (zooms.available &= ~zooms.current);
        return symbolizers;
    }
};

// The tree.Zoom.toString function ignores the holes in zoom ranges and outputs
// scaledenominators that cover the whole range from the first to last bit set.
// This algorithm can produces zoom ranges that may have holes. However,
// when using the filter-mode="first", more specific zoom filters will always
// end up before broader ranges. The filter-mode will pick those first before
// resorting to the zoom range with the hole and stop processing further rules.
tree.Definition.prototype.toXML = function(env, existing) {
    var filter = this.filters.toString();
    if (!(filter in existing)) existing[filter] = tree.Zoom.all;

    var available = tree.Zoom.all, xml = '', zoom, symbolizers,
        zooms = { available: tree.Zoom.all };
    for (var i = 0; i < this.rules.length && available; i++) {
        zooms.rule = this.rules[i].zoom;
        if (!(existing[filter] & zooms.rule)) continue;

        while (zooms.current = zooms.rule & available) {
            if (symbolizers = this.collectSymbolizers(zooms, i)) {
                if (!(existing[filter] & zooms.current)) continue;
                xml += this.symbolizersToXML(env, symbolizers,
                    (new tree.Zoom()).setZoom(existing[filter] & zooms.current));
                existing[filter] &= ~zooms.current;
            }
        }
    }

    return xml;
};

tree.Definition.prototype.toJS = function(env) {
  var shaderAttrs = {};
  var frame_offset = this.frame_offset;
  var zoomFilter = "(" + this.zoom + " & (1 << ctx.zoom))";
  var filters = [zoomFilter];
  var originalFilters = this.filters.toJS(env);
  // Ignore default zoom for filtering (https://github.com/CartoDB/carto/issues/40)
  var zoomFiltered = this.zoom !== tree.Zoom.all;
  
  if (originalFilters) {
      filters.push(originalFilters);
  }

  if (frame_offset) {
      filters.push('ctx["frame-offset"] === ' + frame_offset);
  }

  _.each(this.rules, function (rule) {
      var exportedRule = {};

      if (!rule instanceof tree.Rule) {
          throw new Error("Ruleset not supported");
      }

      exportedRule.index = rule.index;
      exportedRule.symbolizer = rule.symbolizer;
      exportedRule.js = "if(" + filters.join(" && ") + "){" + rule.value.toJS(env) + "}";
      exportedRule.constant = rule.value.ev(env).is !== 'field';
      exportedRule.filtered = zoomFiltered || (originalFilters !== '');
      shaderAttrs[rule.name] = shaderAttrs[rule.name] || [];
      shaderAttrs[rule.name].push(exportedRule);
  });

  return shaderAttrs;
};


})(require('../tree'));
 at SyntaxError: Unexpected token (2:4)
    at Parser.pp$4.raise (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp$2.parseBindingAtom (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1417:12)
    at Parser.parseBindingAtom (/root/ExpoSE/lib/Tropigate/bin/FunctionSignatures.js:49:30)
    at Parser.pp$1.parseVarId (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1049:20)
    at Parser.pp$1.parseVar (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:1032:14)
    at Parser.pp$1.parseVarStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:917:10)
    at Parser.pp$1.parseStatement (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:706:19)
    at Parser.parseStatement (/root/ExpoSE/lib/Tropigate/bin/Statements.js:104:30)
    at Parser.pp$1.parseBlock (/root/ExpoSE/lib/Tropigate/node_modules/acorn/dist/acorn.js:981:25)
*-- Replay with NO_COMPILE=1 expoSE replay '/root/ExpoSE/lib/Harness/src/harness.js' '{"_bound":0}'
*-- Coverage Data
*- File /root/ExpoSE/lib/Harness/src/harness.js. Coverage (Term): 18% Coverage (LOC): 24%
*- File /root/ExpoSE/lib/S$/bin/symbols.js. Coverage (Term): 16% Coverage (LOC): 34%
*- File /root/Targets/torque.js/node_modules/torque.js/lib/torque/index.js. Coverage (Term): 35% Coverage (LOC): 41%
*- File /root/Targets/torque.js/node_modules/torque.js/lib/torque/core.js. Coverage (Term): 34% Coverage (LOC): 50%
*- File /root/Targets/torque.js/node_modules/torque.js/lib/torque/animator.js. Coverage (Term): 12% Coverage (LOC): 21%
*- File /root/Targets/torque.js/node_modules/torque.js/lib/torque/animator-steps-range.js. Coverage (Term): 31% Coverage (LOC): 50%
*- File /root/Targets/torque.js/node_modules/torque.js/lib/torque/cartocss_reference.js. Coverage (Term): 100% Coverage (LOC): 100%
*- File /root/Targets/torque.js/node_modules/torque.js/lib/torque/common.js. Coverage (Term): 16% Coverage (LOC): 16%
*- File /root/Targets/torque.js/node_modules/carto/lib/carto/index.js. Coverage (Term): 19% Coverage (LOC): 19%
*- File /root/Targets/torque.js/node_modules/carto/lib/carto/parser.js. Coverage (Term): 1% Coverage (LOC): 1%
*- File /root/Targets/torque.js/node_modules/carto/lib/carto/tree.js. Coverage (Term): 38% Coverage (LOC): 50%
*- File /root/Targets/torque.js/node_modules/underscore/underscore.js. Coverage (Term): 19% Coverage (LOC): 33%
*- File /root/Targets/torque.js/node_modules/carto/lib/carto/renderer.js. Coverage (Term): 5% Coverage (LOC): 8%
*- File /root/Targets/torque.js/node_modules/carto/lib/carto/renderer_js.js. Coverage (Term): 8% Coverage (LOC): 18%
*- File /root/Targets/torque.js/node_modules/carto/lib/carto/torque-reference.js. Coverage (Term): 100% Coverage (LOC): 100%
*- File /root/Targets/torque.js/node_modules/carto/lib/carto/tree/call.js. Coverage (Term): 11% Coverage (LOC): 12%
*- File /root/Targets/torque.js/node_modules/carto/lib/carto/tree/color.js. Coverage (Term): 8% Coverage (LOC): 18%
*- File /root/Targets/torque.js/node_modules/carto/lib/carto/tree/comment.js. Coverage (Term): 47% Coverage (LOC): 69%
*- Re-run with EXPOSE_PRINT_COVERAGE=1 to print line by line coverage information
** ExpoSE Finished. 1 paths with 1 errors **
