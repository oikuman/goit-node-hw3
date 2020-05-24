const findEmptyObject = obj => {
    if (!Object.keys(obj).length) return true;
    
    return false;
}

export default findEmptyObject;