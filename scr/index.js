const genDiff = (file1, file2) => {
    const path1 = path.resolve(process.cwd(file1), file1);
    const path2 = path.resolve(process.cwd(file2), file2);
    const readFile1 = fs.readFileSync(path1);
    const readFile2 = fs.readFileSync(path2);
    const string1 = JSON.parse(readFile1);
    const string2 = JSON.parse(readFile2);
    const result = (string1, string2) => {
        const keys = Object.keys({ ...string1, ...string2 });
        const sortKeys = _.sortBy(keys);
    const resultKey = sortKeys.map((key) => {
        if (!_.has(file1, key)) {
            return { key, value2: file2[key], type: 'add' }
    }
    if ((!_.has(file2, key))) {
        return { key, value1: file1[key], type: 'delet' }
    }
    if (file1[key] !== file2[key]) {
        return { key, value1: file1[key], value2: file2[key], type: 'chang' }
        }
    return { key, value1: file1[key] };
    });
    return resultKey;
}
};
