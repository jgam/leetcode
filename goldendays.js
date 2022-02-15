var kEmptySlots = function(flowers, k) {
    var theDay = -1;
    var gardenSlot = [];
    var days = flowers.length;
    var location, verify;
    gardenSlot[flowers[0] - 1] = 1;
    for (var i = 1; i < days; i++) {
        if (flowers[i] - 1 - k - 1 >= 0 && gardenSlot[flowers[i] - 1 - k - 1] === 1) {
            location = flowers[i] - 1 - k - 1;
            verify = true;
            for (var j = 1; j < k + 1; j++) {
                if (gardenSlot[location + j] === 1) {
                    verify = false;
                    break;
                }
            }
            if (verify) {
                return i + 1;
            }
        } else if (flowers[i] - 1 + k + 1 <= days - 1 && gardenSlot[flowers[i] - 1 + k + 1] === 1) {
            location = flowers[i] - 1 + k + 1;
            verify = true;
            for (var j = 1; j < k + 1; j++) {
                if (gardenSlot[location - j] === 1) {
                    verify = false;
                    break;
                }
            }
            if (verify) {
                return i + 1;
            }
        }
        gardenSlot[flowers[i] - 1] = 1;
    }
    return theDay;
};
