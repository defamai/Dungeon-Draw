var DungeonDrawTiles = (function () {
    'use strict';
    var textures = [];

    textures['Old School|#18769c'] = [
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687867/ubqG6ex75Di2hdpP3fnBcw/thumb.jpg?1428338097', key: 'DD_001', value: 124, mask: 125 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687873/S0c93Xl8Hifvyh4At6s2-w/thumb.jpg?1428338123', key: 'DD_002', value: 28,  mask:  93 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687877/-HHvauJwg5w1N-RYBfPCnA/thumb.jpg?1428338127', key: 'DD_003', value: 4,   mask: 85  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687878/9SizEkVy1DDhwVAWSCop1g/thumb.jpg?1428338130', key: 'DD_004', value: 0,   mask: 85  },

        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687876/nk-XrCg8_4h8hOHaCvf87w/thumb.jpg?1428338125', key: 'DD_005', value: 68,  mask: 85  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687635/lJpGfSX4zlhZY0uE2LpQgg/thumb.jpg?1428337639', key: 'DD_006', value: 255, mask: 255 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687881/D72riGtN8u6fw1IcCh7qAA/thumb.jpg?1428338134', key: 'DD_007', value: 29,  mask: 95  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8847411/nLD3npCgfhQVqUmriBIrCg/thumb.jpg?1429091064', key: 'DD_008', value: 92,  mask: 125 },// Questionable - Did I get this right?
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8847413/oHbQpX4nB2kVZi9h_WM9-Q/thumb.jpg?1429091090', key: 'DD_009', value: 84,  mask: 125 },// Questionable - Did I get this right?

        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687882/hZWddmSkuomMDfIBnImMiw/thumb.jpg?1428338136', key: 'DD_010', value: 5,   mask: 87  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687879/lBv1t7D2erNxb8fwEbijmA/thumb.jpg?1428338132', key: 'DD_011', value: 253, mask: 255 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687883/2r3WQzu371XFnMDO_N6ibA/thumb.jpg?1428338139', key: 'DD_012', value: 125, mask: 255 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687884/7eDZFGHcXjL9jP9HhjTPZg/thumb.jpg?1428338141', key: 'DD_013', value: 221, mask: 255 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687888/Zn4iLe4n6XtxXorp5qtMkg/thumb.jpg?1428338143', key: 'DD_014', value:  93, mask: 255 },

        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687889/7_fOpD64gKb5BHi4tc4Abg/thumb.jpg?1428338145', key: 'DD_015', value: 85,  mask: 255 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687638/n6mxepmRTjT_N5ybriYyWA/thumb.jpg?1428337649', key: 'DD_016', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687614/y23wGHQWqj1jfgthVwpVug/thumb.png?1428337525', key: 'DD_017', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687611/Jb6487W7fwhiFpkbMk9Qtg/thumb.png?1428337522', key: 'DD_018', value: 255,  mask: 0  },

        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687601/j_-PIsr1DktfcxQMlgBUvg/thumb.png?1428337472', key: 'DD_019', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687599/2Qq52EfmbE4rqq0VxNffdw/thumb.png?1428337465', key: 'DD_020', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687598/7goMjz35lOZRjZmwSPS88Q/thumb.png?1428337462', key: 'DD_021', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687597/PWQVPvg9w0WHWDm4wjSPjA/thumb.png?1428337458', key: 'DD_022', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687709/iGTxi51APOWMCJkTvulo9Q/thumb.png?1428337746', key: 'DD_023', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687705/vbO7ubucShfOEKPnvB8Xaw/thumb.png?1428337745', key: 'DD_024', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687658/w_8fyI6Y4qnkdfWs0ccaPw/thumb.jpg?1428337712', key: 'DD_025', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687660/NEeId1qeiLkVogfQsedgaA/thumb.jpg?1428337715', key: 'DD_026', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687591/OuYL54MDxt7agCuR9O0N4g/thumb.png?1428337422', key: 'DD_027', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8687375/ory7Y53LySsKencs3SW2Gg/thumb.png?1428337122', key: 'DD_028', value: 255,  mask: 0  }
    ];
    
    textures['Basic Dungeon|#000000'] = [
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688207/4C5fObhHhiboA_ZWsuuRuA/thumb.jpg?1428339058', key: 'DD_001', value: 124, mask: 125 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688208/LoOQNC6ZV6zKR9vXloUs3w/thumb.jpg?1428339059', key: 'DD_002', value: 28,  mask:  93 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688212/u_egrANsoLpcgwzXEV8pvQ/thumb.jpg?1428339064', key: 'DD_003', value: 4,   mask: 85  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688213/R-uVN_WumFr0ogc2oGkc5Q/thumb.jpg?1428339066', key: 'DD_004', value: 0,   mask: 85  },

        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688210/UW5F2y1c2WV92pwSg6kCgQ/thumb.jpg?1428339062', key: 'DD_005', value: 68,  mask: 85  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688113/kFWydwUt6ByTO-2hFIhCnw/thumb.jpg?1428338752', key: 'DD_006', value: 255, mask: 255 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688216/DHpe_JFKgpwPIPCxn6D7DQ/thumb.jpg?1428339069', key: 'DD_007', value: 29,  mask: 95  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8847410/dnD9p-eHUHP-C39YZW7n6Q/thumb.jpg?1429091060', key: 'DD_008', value: 92,  mask: 125 },// Questionable - Did I get this right?
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8847412/A91poaHswrm1HvxqDZH2jw/thumb.jpg?1429091088', key: 'DD_009', value: 84,  mask: 125 },// Questionable - Did I get this right?

        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688217/C61BvF6pIZpeEAun8EeQzw/thumb.jpg?1428339072', key: 'DD_010', value: 5,   mask: 87  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688215/BPT2ltQmYwRs3BXR7sIwlw/thumb.jpg?1428339068', key: 'DD_011', value: 253, mask: 255 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688219/grMKmZkeaRpsJedfNOEXUA/thumb.jpg?1428339074', key: 'DD_012', value: 125, mask: 255 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688222/UrNdDov6_Q56MY3ji8H5ag/thumb.jpg?1428339077', key: 'DD_013', value: 221, mask: 255 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688224/iEQiE7fJ7QlJHM1Wa7zp5A/thumb.jpg?1428339079', key: 'DD_014', value:  93, mask: 255 },

        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688225/ziTYv_EM35QH_eDDvM6rgA/thumb.jpg?1428339082', key: 'DD_015', value: 85,  mask: 255 },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688128/BPWSp_GV86qdH_cSwqBOZw/thumb.jpg?1428338826', key: 'DD_016', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688093/vMOP-vKcOddHd5j6wGBoKQ/thumb.png?1428338684', key: 'DD_017', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688092/-aczRTDICkT98QhIY3Oy-w/thumb.png?1428338681', key: 'DD_018', value: 255,  mask: 0  },

        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688091/EMkRPG7Od5JZo88X9ON9rQ/thumb.png?1428338679', key: 'DD_019', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688090/bBVClpqT0xVLJL3wch-iag/thumb.png?1428338677', key: 'DD_020', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688088/ppei5KjuJK3ZnF5O5vDBbw/thumb.png?1428338674', key: 'DD_021', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688086/gaAI9cmJoxZkhLTpjgmWQw/thumb.png?1428338672', key: 'DD_022', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688141/HdW-0_0wl9yrdrKJWNxrvg/thumb.png?1428338857', key: 'DD_023', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688140/bc-lstebeqJl4zCJ-ep7ag/thumb.png?1428338855', key: 'DD_024', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688130/OVZouj143Th1Me6LWEMrTA/thumb.jpg?1428338829', key: 'DD_025', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688131/7SvPb3raiK-eoE5j75ypkA/thumb.jpg?1428338831', key: 'DD_026', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688083/FyCKjV2Xp0gneVjoibMwSA/thumb.png?1428338668', key: 'DD_027', value: 255,  mask: 0  },
        {url: 'https://s3.amazonaws.com/files.d20.io/images/8688082/r9F_EY4nqWYSF97Xs3ep9Q/thumb.png?1428338666', key: 'DD_028', value: 255,  mask: 0  }
    ];

    return textures;
}());
