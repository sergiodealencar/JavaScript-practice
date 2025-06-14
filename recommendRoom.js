function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    let totalCount = adultsCount + childrenCount + babiesCount;

    if (totalCount <= 4) {
        return 'small room';
    }

    if ((totalCount > 4 && totalCount <= 8) && (babiesCount === 0)) {
        return 'big room';
    }


    if ((totalCount > 4 && totalCount < 8) && (babiesCount > 0)) {
        return 'small room + extra bed';
    }

    if (totalCount >= 8 && babiesCount > 0) {
        return 'big room + extra bed';
    }
        
}
