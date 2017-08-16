J$.iids = {"8":[8,21,8,26],"9":[1,20,1,27],"10":[6,25,6,31],"17":[1,28,1,32],"18":[8,21,8,26],"25":[1,20,1,33],"26":[8,28,8,31],"33":[1,20,1,33],"41":[1,20,1,33],"42":[8,28,8,31],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,14,3,21],"89":[3,22,3,32],"97":[3,14,3,33],"105":[3,14,3,33],"113":[3,14,3,33],"121":[5,13,5,25],"129":[5,33,5,41],"137":[5,43,5,44],"145":[5,13,5,45],"147":[5,13,5,32],"153":[5,13,5,45],"161":[5,13,5,45],"169":[6,5,6,17],"177":[6,25,6,26],"185":[6,29,6,31],"193":[6,5,6,32],"195":[6,5,6,24],"201":[6,5,6,39],"203":[6,5,6,37],"209":[6,5,6,40],"217":[7,17,7,19],"225":[7,17,7,19],"233":[7,17,7,19],"241":[8,18,8,19],"249":[8,18,8,19],"257":[8,18,8,19],"265":[8,21,8,22],"273":[8,25,8,26],"289":[8,28,8,29],"297":[8,28,8,31],"313":[9,9,9,14],"321":[9,20,9,32],"329":[9,40,9,45],"337":[9,47,9,49],"345":[9,20,9,50],"347":[9,20,9,39],"353":[9,9,9,51],"355":[9,9,9,19],"361":[9,9,9,52],"369":[11,12,11,17],"377":[11,12,11,17],"385":[11,5,11,18],"393":[4,1,12,2],"401":[4,1,12,2],"409":[4,1,12,2],"417":[4,1,12,2],"425":[4,1,12,2],"433":[13,1,13,7],"441":[13,8,13,21],"449":[13,8,13,23],"457":[13,25,13,37],"465":[13,49,13,55],"473":[13,25,13,56],"475":[13,25,13,48],"481":[13,1,13,57],"489":[13,1,13,58],"497":[1,1,13,58],"505":[1,1,13,58],"513":[1,1,13,58],"521":[1,1,13,58],"529":[4,1,12,2],"537":[1,1,13,58],"545":[8,5,10,6],"553":[8,5,10,6],"561":[4,1,12,2],"569":[4,1,12,2],"577":[1,1,13,58],"585":[1,1,13,58],"nBranches":2,"originalCodeFileName":"/home/blake/Targets/minimist/test.js","instrumentedCodeFileName":"/home/blake/Targets/minimist/test_jalangi_.js","code":"// Require your NPM library\nvar target = require('minimist');\n\nfunction SymbolicArray() {\n\tvar x = symbolic Switch initial 0;\n\tassume x < 10;\n\tvar array = [];\n\tfor (var i = 0; i < x; i++) {\n\t\tarray.push(symbolic Arg initial '');\n\t}\n\treturn array;\n}\n\ntarget(SymbolicArray(), symbolic Opts);"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(497, '/home/blake/Targets/minimist/test_jalangi_.js', '/home/blake/Targets/minimist/test.js');
            function SymbolicArray() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(393, arguments.callee, this, arguments);
                            arguments = J$.N(401, 'arguments', arguments, 4);
                            J$.N(409, 'x', x, 0);
                            J$.N(417, 'array', array, 0);
                            J$.N(425, 'i', i, 0);
                            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, '__secret__S$', __secret__S$, 1), 'symbol', 0)(J$.T(129, 'Switch', 21, false), J$.T(137, 0, 22, false)), x, 1));
                            J$.X1(209, J$.M(201, J$.M(193, J$.R(169, '__secret__S$', __secret__S$, 1), 'assume', 0)(J$.B(10, '<', J$.R(177, 'x', x, 0), J$.T(185, 10, 22, false), 0)), 'true', 0)());
                            var array = J$.X1(233, J$.W(225, 'array', J$.T(217, [], 10, false), array, 1));
                            for (var i = J$.X1(257, J$.W(249, 'i', J$.T(241, 0, 22, false), i, 1)); J$.X1(545, J$.C(8, J$.B(18, '<', J$.R(265, 'i', i, 0), J$.R(273, 'x', x, 0), 0))); J$.X1(553, J$.B(42, '-', i = J$.W(297, 'i', J$.B(34, '+', J$.U(26, '+', J$.R(289, 'i', i, 0)), J$.T(281, 1, 22, false), 0), i, 0), J$.T(305, 1, 22, false), 0))) {
                                J$.X1(361, J$.M(353, J$.R(313, 'array', array, 0), 'push', 0)(J$.M(345, J$.R(321, '__secret__S$', __secret__S$, 1), 'symbol', 0)(J$.T(329, 'Arg', 21, false), J$.T(337, '', 21, false))));
                            }
                            return J$.X1(385, J$.Rt(377, J$.R(369, 'array', array, 0)));
                        } catch (J$e) {
                            J$.Ex(561, J$e);
                        } finally {
                            if (J$.Fr(569))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(505, '__secret__S$', __secret__S$, 0);
            J$.N(513, '__secret__traits__', __secret__traits__, 0);
            J$.N(521, 'target', target, 0);
            SymbolicArray = J$.N(537, 'SymbolicArray', J$.T(529, SymbolicArray, 12, false, 393), 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var target = J$.X1(113, J$.W(105, 'target', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'minimist', 21, false)), target, 3));
            J$.X1(489, J$.F(481, J$.R(433, 'target', target, 1), 0)(J$.F(449, J$.R(441, 'SymbolicArray', SymbolicArray, 1), 0)(), J$.M(473, J$.R(457, '__secret__S$', __secret__S$, 1), 'pureSymbol', 0)(J$.T(465, 'Opts', 21, false))));
        } catch (J$e) {
            J$.Ex(577, J$e);
        } finally {
            if (J$.Sr(585)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
