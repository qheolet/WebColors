define(["require", "exports"], function (require, exports) {
    exports.LISTOFCOLOR = [{ "name": "Alice Blue", "hex": "#F0F8FF", "groupColor": "White", "webSafeName": "aliceblue" }, { "name": "Antique White", "hex": "#FAEBD7", "groupColor": "White", "webSafeName": "antiquewhite" }, { "name": "Aqua", "hex": "#00FFFF", "groupColor": "Cyan", "webSafeName": "aqua" }, { "name": "Aquamarine", "hex": "#7FFFD4", "groupColor": "Cyan", "webSafeName": "aquamarine" }, { "name": "Azure", "hex": "#F0FFFF", "groupColor": "Cyan", "webSafeName": "azure" }, { "name": "Beige", "hex": "#F5F5DC", "groupColor": "White", "webSafeName": "beige" }, { "name": "Bisque", "hex": "#FFE4C4", "groupColor": "Brown", "webSafeName": "bisque" }, { "name": "Black", "hex": "#000000", "groupColor": "Gray", "webSafeName": "black" }, { "name": "Blanched Almond", "hex": "#FFEBCD", "groupColor": "Brown", "webSafeName": "blanchedalmond" }, { "name": "Blue", "hex": "#0000FF", "groupColor": "Blue", "webSafeName": "blue" }, { "name": "Blue Violet", "hex": "#8A2BE2", "groupColor": "Purple", "webSafeName": "blueviolet" }, { "name": "Brown", "hex": "#A52A2A", "groupColor": "Brown", "webSafeName": "brown" }, { "name": "Burlywood", "hex": "#DEB887", "groupColor": "Brown", "webSafeName": "burlywood" }, { "name": "Cadet Blue", "hex": "#5F9EA0", "groupColor": "Cyan", "webSafeName": "cadetblue" }, { "name": "Chartreuse", "hex": "#7FFF00", "groupColor": "Green", "webSafeName": "chartreuse" }, { "name": "Chocolate", "hex": "#D2691E", "groupColor": "Brown", "webSafeName": "chocolate" }, { "name": "Coral", "hex": "#FF7F50", "groupColor": "Orange", "webSafeName": "coral" }, { "name": "Corn Flower Blue", "hex": "#6495ED", "groupColor": "Blue", "webSafeName": "cornflower blue" }, { "name": "Corn Silk", "hex": "#FFF8DC", "groupColor": "Brown", "webSafeName": "cornsilk" }, { "name": "Crimson", "hex": "#DC143C", "groupColor": "Red", "webSafeName": "crimson" }, { "name": "Cyan", "hex": "#00FFFF", "groupColor": "Cyan", "webSafeName": "cyan" }, { "name": "Dark Blue", "hex": "#00008B", "groupColor": "Blue", "webSafeName": "darkblue" }, { "name": "Dark Cyan", "hex": "#008B8B", "groupColor": "Cyan", "webSafeName": "darkcyan" }, { "name": "Dark Golden Rod", "hex": "#B8860B", "groupColor": "Brown", "webSafeName": "darkgolden rod" }, { "name": "Dark Gray", "hex": "#A9A9A9", "groupColor": "Gray", "webSafeName": "darkgray" }, { "name": "Dark Green", "hex": "#006400", "groupColor": "Green", "webSafeName": "darkgreen" }, { "name": "Dark Grey", "hex": "#A9A9A9", "groupColor": "Gray", "webSafeName": "darkgrey" }, { "name": "Dark Khaki", "hex": "#BDB76B", "groupColor": "Yellow", "webSafeName": "darkkhaki" }, { "name": "Dark Magenta", "hex": "#8B008B", "groupColor": "Purple", "webSafeName": "darkmagenta" }, { "name": "Dark olive Green", "hex": "#556B2F", "groupColor": "Green", "webSafeName": "darkolive green" }, { "name": "Dark orange", "hex": "#FF8C00", "groupColor": "Orange", "webSafeName": "darkorange" }, { "name": "Dark orchid", "hex": "#9932CC", "groupColor": "Purple", "webSafeName": "darkorchid" }, { "name": "Dark red", "hex": "#8B0000", "groupColor": "Red", "webSafeName": "darkred" }, { "name": "Dark Salmon", "hex": "#E9967A", "groupColor": "Red", "webSafeName": "darksalmon" }, { "name": "Dark Sea Green", "hex": "#8FBC8F", "groupColor": "Green", "webSafeName": "darksea green" }, { "name": "Dark Slate Blue", "hex": "#483D8B", "groupColor": "Purple", "webSafeName": "darkslate blue" }, { "name": "Dark Slate gray", "hex": "#2F4F4F", "groupColor": "Gray", "webSafeName": "darkslate gray" }, { "name": "Dark Slate grey", "hex": "#2F4F4F", "groupColor": "Gray", "webSafeName": "darkslate grey" }, { "name": "Dark turquoise", "hex": "#00CED1", "groupColor": "Cyan", "webSafeName": "darkturquoise" }, { "name": "Dark violet", "hex": "#9400D3", "groupColor": "Purple", "webSafeName": "darkviolet" }, { "name": "Deep pink", "hex": "#FF1493", "groupColor": "Pink", "webSafeName": "deeppink" }, { "name": "Deep skyBlue", "hex": "#00BFFF", "groupColor": "Blue", "webSafeName": "deepskyblue" }, { "name": "Dim gray", "hex": "#696969", "groupColor": "Gray", "webSafeName": "dimgray" }, { "name": "Dim grey", "hex": "#696969", "groupColor": "Grey", "webSafeName": "dimgrey" }, { "name": "Dodger Blue", "hex": "#1E90FF", "groupColor": "Blue", "webSafeName": "dodgerblue" }, { "name": "Firebrick", "hex": "#B22222", "groupColor": "Red", "webSafeName": "firebrick" }, { "name": "Floral White", "hex": "#FFFAF0", "groupColor": "White", "webSafeName": "floralwhite" }, { "name": "Forest Green", "hex": "#228B22", "groupColor": "Green", "webSafeName": "forestgreen" }, { "name": "Fuchsia", "hex": "#FF00FF", "groupColor": "Purple", "webSafeName": "fuchsia" }, { "name": "Gainsboro", "hex": "#DCDCDC", "groupColor": "Gray", "webSafeName": "gainsboro" }, { "name": "Ghost White", "hex": "#F8F8FF", "groupColor": "White", "webSafeName": "ghostwhite" }, { "name": "Gold", "hex": "#FFD700", "groupColor": "Yellow", "webSafeName": "gold" }, { "name": "Goldenrod", "hex": "#DAA520", "groupColor": "Brown", "webSafeName": "goldenrod" }, { "name": "Gray", "hex": "#808080", "groupColor": "Gray", "webSafeName": "gray" }, { "name": "Green", "hex": "#008000", "groupColor": "Green", "webSafeName": "green" }, { "name": "Green Yellow", "hex": "#ADFF2F", "groupColor": "Green", "webSafeName": "greenyellow" }, { "name": "Grey", "hex": "#808080", "groupColor": "Gray", "webSafeName": "grey" }, { "name": "Honeydew", "hex": "#F0FFF0", "groupColor": "white", "webSafeName": "honeydew" }, { "name": "Hot Pink", "hex": "#FF69B4", "groupColor": "Pink", "webSafeName": "hotpink" }, { "name": "Indian Red", "hex": "#CD5C5C", "groupColor": "Red", "webSafeName": "indianred" }, { "name": "Indigo", "hex": "#4B0082", "groupColor": "Purple", "webSafeName": "indigo" }, { "name": "Ivory", "hex": "#FFFFF0", "groupColor": "White", "webSafeName": "ivory" }, { "name": "Khaki", "hex": "#F0E68C", "groupColor": "Yellow", "webSafeName": "khaki" }, { "name": "Lavender ", "hex": "#E6E6FA", "groupColor": "Purple", "webSafeName": "lavender" }, { "name": "Lavender Blush", "hex": "#FFF0F5", "groupColor": "Pink", "webSafeName": "lavenderblush" }, { "name": "Lawn Green", "hex": "#7CFC00", "groupColor": "Green", "webSafeName": "lawngreen" }, { "name": "Lemon Chiffon", "hex": "#FFFACD", "groupColor": "Yellow", "webSafeName": "lemonchiffon" }, { "name": "Light Blue", "hex": "#ADD8E6", "groupColor": "Blue", "webSafeName": "lightblue" }, { "name": "Light Coral", "hex": "#F08080", "groupColor": "Red", "webSafeName": "lightcoral" }, { "name": "Light Cyan", "hex": "#E0FFFF", "groupColor": "Cyan", "webSafeName": "lightcyan" }, { "name": "Light Goldenrodyellow", "hex": "#FAFAD2", "groupColor": "Yellow", "webSafeName": "lightgoldenrodyellow" }, { "name": "Light Gray", "hex": "#D3D3D3", "groupColor": "Gray", "webSafeName": "lightgray" }, { "name": "Light Green", "hex": "#90EE90", "groupColor": "Green", "webSafeName": "lightgreen" }, { "name": "Light Grey", "hex": "#D3D3D3", "groupColor": "Gray", "webSafeName": "lightgrey" }, { "name": "Light Pink", "hex": "#FFB6C1", "groupColor": "Pink", "webSafeName": "lightpink" }, { "name": "Light Salmon", "hex": "#FFA07A", "groupColor": "Red", "webSafeName": "lightsalmon" }, { "name": "Light Sea  Green", "hex": "#20B2AA", "groupColor": "Cyan", "webSafeName": "lightsea  green" }, { "name": "Light SkyBlue", "hex": "#87CEFA", "groupColor": "Blue", "webSafeName": "lightskyblue" }, { "name": "Light Slate gray", "hex": "#778899", "groupColor": "Gray", "webSafeName": "lightslate gray" }, { "name": "Light Slate grey", "hex": "#778899", "groupColor": "Gray", "webSafeName": "lightslate grey" }, { "name": "Light steelBlue", "hex": "#B0C4DE", "groupColor": "Blue", "webSafeName": "lightsteelblue" }, { "name": "Light Yellow", "hex": "#FFFFE0", "groupColor": "Yellow", "webSafeName": "lightyellow" }, { "name": "Lime", "hex": "#00FF00", "groupColor": "Green", "webSafeName": "lime" }, { "name": "Lime Green", "hex": "#32CD32", "groupColor": "Green", "webSafeName": "limegreen" }, { "name": "Linen", "hex": "#FAF0E6", "groupColor": "White", "webSafeName": "linen" }, { "name": "Magenta", "hex": "#FF00FF", "groupColor": "Purple", "webSafeName": "magenta" }, { "name": "Maroon", "hex": "#800000", "groupColor": "Brown", "webSafeName": "maroon" }, { "name": "Medium Aquamarine", "hex": "#66CDAA", "groupColor": "Cyan", "webSafeName": "mediumaquamarine" }, { "name": "Medium Blue", "hex": "#0000CD", "groupColor": "Blue", "webSafeName": "mediumblue" }, { "name": "Medium Orchid", "hex": "#BA55D3", "groupColor": "Purple", "webSafeName": "mediumorchid" }, { "name": "Medium Purple", "hex": "#9370DB", "groupColor": "Purple", "webSafeName": "mediumpurple" }, { "name": "Medium Sea Green", "hex": "#3CB371", "groupColor": "", "webSafeName": "mediumseagreen" }, { "name": "Medium Slate Blue", "hex": "#7B68EE", "groupColor": "Purple", "webSafeName": "mediumslate blue" }, { "name": "Medium Spring Green", "hex": "#00FA9A", "groupColor": "Green", "webSafeName": "mediumspring green" }, { "name": "Medium Turquoise", "hex": "#48D1CC", "groupColor": "Cyan", "webSafeName": "mediumturquoise" }, { "name": "medium Violet Red", "hex": "#C71585", "groupColor": "Pink", "webSafeName": "mediumviolet red" }, { "name": "Midnight Blue", "hex": "#191970", "groupColor": "Blue", "webSafeName": "midnightblue" }, { "name": "Mint Cream", "hex": "#F5FFFA", "groupColor": "White", "webSafeName": "mintcream" }, { "name": "Misty Rose", "hex": "#FFE4E1", "groupColor": "Pink", "webSafeName": "mistyrose" }, { "name": "Moccasin", "hex": "#FFE4B5", "groupColor": "Yellow", "webSafeName": "moccasin" }, { "name": "Navajo White", "hex": "#FFDEAD", "groupColor": "Brown", "webSafeName": "navajowhite" }, { "name": "Navy", "hex": "#000080", "groupColor": "Blue", "webSafeName": "navy" }, { "name": "Oldlace", "hex": "#FDF5E6", "groupColor": "White", "webSafeName": "oldlace" }, { "name": "Olive", "hex": "#808000", "groupColor": "Green", "webSafeName": "olive" }, { "name": "Olive Drab", "hex": "#6B8E23", "groupColor": "Green", "webSafeName": "olivedrab" }, { "name": "Orange", "hex": "#FFA500", "groupColor": "Orange", "webSafeName": "orange" }, { "name": "Orange Red", "hex": "#FF4500", "groupColor": "Orange", "webSafeName": "orangered" }, { "name": "Orchid", "hex": "#DA70D6", "groupColor": "Purple", "webSafeName": "orchid" }, { "name": "Pale Golden Rod", "hex": "#EEE8AA", "groupColor": "Yellow", "webSafeName": "palegolden rod" }, { "name": "Pale Green", "hex": "#98FB98", "groupColor": "Green", "webSafeName": "palegreen" }, { "name": "Pale Turquoise", "hex": "#AFEEEE", "groupColor": "Cyan", "webSafeName": "paleturquoise" }, { "name": "Pale Violet Red", "hex": "#DB7093", "groupColor": "Pink", "webSafeName": "paleviolet red" }, { "name": "Papaya Whip", "hex": "#FFEFD5", "groupColor": "Yellow", "webSafeName": "papayawhip" }, { "name": "Peach Puff", "hex": "#FFDAB9", "groupColor": "Yellow", "webSafeName": "peachpuff" }, { "name": "Peru", "hex": "#CD853F", "groupColor": "Brown", "webSafeName": "peru" }, { "name": "Pink", "hex": "#FFC0CB", "groupColor": "Pink", "webSafeName": "pink" }, { "name": "Plum", "hex": "#DDA0DD", "groupColor": "Purple", "webSafeName": "plum" }, { "name": "Powder Blue", "hex": "#B0E0E6", "groupColor": "Blue", "webSafeName": "powderblue" }, { "name": "Purple", "hex": "#800080", "groupColor": "Purple", "webSafeName": "purple" }, { "name": "Rebecca Purple", "hex": "#663399", "groupColor": "Purple", "webSafeName": "rebeccapurple" }, { "name": "Red", "hex": "#FF0000", "groupColor": "Red", "webSafeName": "red" }, { "name": "Rosy Brown", "hex": "#BC8F8F", "groupColor": "Brown", "webSafeName": "rosybrown" }, { "name": "Royal Blue", "hex": "#4169E1", "groupColor": "Blue", "webSafeName": "royalblue" }, { "name": "Saddle Brown", "hex": "#8B4513", "groupColor": "Brown", "webSafeName": "saddlebrown" }, { "name": "Salmon", "hex": "#FA8072", "groupColor": "Red", "webSafeName": "salmon" }, { "name": "Sandy Brown", "hex": "#F4A460", "groupColor": "Brown", "webSafeName": "sandybrown" }, { "name": "Sea Green", "hex": "#2E8B57", "groupColor": "Green", "webSafeName": "seagreen" }, { "name": "Sea Shell", "hex": "#FFF5EE", "groupColor": "White", "webSafeName": "seashell" }, { "name": "Sienna", "hex": "#A0522D", "groupColor": "Brown", "webSafeName": "sienna" }, { "name": "Silver", "hex": "#C0C0C0", "groupColor": "Silver", "webSafeName": "silver" }, { "name": "Sky Blue", "hex": "#87CEEB", "groupColor": "Blue", "webSafeName": "skyblue" }, { "name": "Slate Blue", "hex": "#6A5ACD", "groupColor": "Purple", "webSafeName": "slateblue" }, { "name": "Slate Gray", "hex": "#708090", "groupColor": "Gray", "webSafeName": "slategray" }, { "name": "Snow", "hex": "#FFFAFA", "groupColor": "White", "webSafeName": "snow" }, { "name": "Spring Green", "hex": "#00FF7F", "groupColor": "Green", "webSafeName": "springgreen" }, { "name": "Steel Blue", "hex": "#4682B4", "groupColor": "Blue", "webSafeName": "steelblue" }, { "name": "Tan", "hex": "#D2B48C", "groupColor": "Brown", "webSafeName": "tan" }, { "name": "Teal", "hex": "#008080", "groupColor": "Cyan", "webSafeName": "teal" }, { "name": "Thistle", "hex": "#D8BFD8", "groupColor": "Purple", "webSafeName": "thistle" }, { "name": "Tomato", "hex": "#FF6347", "groupColor": "Orange", "webSafeName": "tomato" }, { "name": "Turquoise", "hex": "#40E0D0", "groupColor": "Cyan", "webSafeName": "turquoise" }, { "name": "Violet", "hex": "#EE82EE", "groupColor": "Purple", "webSafeName": "violet" }, { "name": "Wheat", "hex": "#F5DEB3", "groupColor": "Brown", "webSafeName": "wheat" }, { "name": "White", "hex": "#FFFFFF", "groupColor": "White", "webSafeName": "white" }, { "name": "Whitesmoke", "hex": "#F5F5F5", "groupColor": "White", "webSafeName": "whitesmoke" }, { "name": "Yellow", "hex": "#FFFF00", "groupColor": "Yellow", "webSafeName": "yellow" }, { "name": "Yellow Green", "hex": "#9ACD32", "groupColor": "Green", "webSafeName": "yellowgreen" }];
    function getColorFromName(colorName) {
        var hexNumber = undefined;
        exports.LISTOFCOLOR.forEach(function (value, index) {
            if (colorName.toLowerCase() === value.webSafeName) {
                hexNumber = value;
            }
        });
        return hexNumber;
    }
    exports.getColorFromName = getColorFromName;
    function getColorUsingIndex(index) {
        return exports.LISTOFCOLOR[index];
    }
    exports.getColorUsingIndex = getColorUsingIndex;
    function getLenghtOfListColor() {
        return exports.LISTOFCOLOR.length;
    }
    exports.getLenghtOfListColor = getLenghtOfListColor;
    var groupsColor = [
        'Pink',
        'Purple',
        'Red',
        'Orange',
        'Yellow',
        'Brown',
        'Green',
        'Cyan',
        'Blue',
        'Gray',
        'White'
    ];
    function getListGroupsColor() {
        return groupsColor;
    }
    exports.getListGroupsColor = getListGroupsColor;
    function getListColorsInGroups(groupName) {
        var newObject = [];
        exports.LISTOFCOLOR.forEach(function (color, index) {
            if (groupName.toLowerCase() === color.groupColor.toLowerCase()) {
                newObject.push(color);
            }
        });
        return newObject;
    }
    exports.getListColorsInGroups = getListColorsInGroups;
});
//# sourceMappingURL=colorList.js.map