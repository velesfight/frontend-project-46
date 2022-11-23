const genDiff = (file1, file2) => {
    const path1 = path.resolve(process.cwd(file1), file1);
    const path2 = path.resolve(process.cwd(file2), file2);
    const readFile1 = fs.readFileSync(path1);
    const readFile2 = fs.readFileSync(path2);
    const string1 = JSON.parse(readFile1);
    const string2 = JSON.parse(readFile2);
    const keys = Object.keys({ ...string1, ...string2 });
    const resultKey = Keys.map((key) => {
        const minus = '-';
        const plus = '+';
        if (Object.hasOwn(file1, key) & Object.hasOwn(file2, key)) {
            return { minus, kye: file1[key], plus, key: file2[key]}
        };
        
        
    return resultKey;
}
};
