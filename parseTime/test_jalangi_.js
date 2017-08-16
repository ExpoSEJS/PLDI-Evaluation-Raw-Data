J$.iids = {"9":[1,20,1,27],"10":[5,21,5,33],"17":[1,28,1,32],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,18,3,25],"89":[3,26,3,39],"97":[3,18,3,40],"105":[3,18,3,40],"113":[3,18,3,40],"121":[4,9,4,21],"129":[4,29,4,34],"137":[4,36,4,38],"145":[4,9,4,39],"147":[4,9,4,28],"153":[4,9,4,39],"161":[4,9,4,39],"169":[5,1,5,13],"177":[5,21,5,22],"185":[5,21,5,29],"193":[5,32,5,33],"201":[5,1,5,34],"203":[5,1,5,20],"209":[5,1,5,41],"211":[5,1,5,39],"217":[5,1,5,42],"225":[6,1,6,11],"233":[6,12,6,13],"241":[6,1,6,14],"249":[6,1,6,15],"257":[1,1,6,15],"265":[1,1,6,15],"273":[1,1,6,15],"281":[1,1,6,15],"289":[1,1,6,15],"297":[1,1,6,15],"305":[1,1,6,15],"nBranches":0,"originalCodeFileName":"/home/blake/ExpoSE/Targets/parseTime/test.js","instrumentedCodeFileName":"/home/blake/ExpoSE/Targets/parseTime/test_jalangi_.js","code":"var timeParser = require('time-parser');\n\nvar a = symbolic Arg initial '';\n\nassume a.length < 4;\n\ntimeParser(a)\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(257, '/home/blake/ExpoSE/Targets/parseTime/test_jalangi_.js', '/home/blake/ExpoSE/Targets/parseTime/test.js');
            J$.N(265, '__secret__S$', __secret__S$, 0);
            J$.N(273, '__secret__traits__', __secret__traits__, 0);
            J$.N(281, 'timeParser', timeParser, 0);
            J$.N(289, 'a', a, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var timeParser = J$.X1(113, J$.W(105, 'timeParser', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'time-parser', 21, false)), timeParser, 3));
            var a = J$.X1(161, J$.W(153, 'a', J$.M(145, J$.R(121, '__secret__S$', __secret__S$, 1), 'symbol', 0)(J$.T(129, 'Arg', 21, false), J$.T(137, '', 21, false)), a, 3));
            J$.X1(217, J$.M(209, J$.M(201, J$.R(169, '__secret__S$', __secret__S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(185, J$.R(177, 'a', a, 1), 'length', 0), J$.T(193, 4, 22, false), 0)), 'true', 0)());
            J$.X1(249, J$.F(241, J$.R(225, 'timeParser', timeParser, 1), 0)(J$.R(233, 'a', a, 1)));
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
