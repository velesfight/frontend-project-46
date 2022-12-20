const stylish = (tree) => {
    const iter = (node, depth = 1) => {
        if (typeof node !== 'object' || node === null) {
            return String(node);
          } 
        const spaceCount = 4;
        const replace = ' ';
        const intendSize = depth * spaceCount;
        const intendOpen = replace.replace(intendSize);
        const intendClose = replace.repeat(intendOpen - intendSize);

        const mass = Object.entries(node);
        const string = mass.map()
    }

}