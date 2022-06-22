const condense2 = (sent) => {
    const findCoincidence = (src, dest) => {
        if (src === dest) return src
        let found = false;
        const st = dest;
        let count = dest.length;
        while (count > 0 && !found) {
            if (src.length > count)
                found = src.lastIndexOf(dest) === src.length - dest.length
            if (!found) {
                count--
                dest = dest.slice(0, count)
            }
        }
        return (st.length===count)&&found? src:src + st.slice(-(st.length - count))
    }

    return sent.split(' ').reduce((acc, itm) =>
            acc === '' ? itm : findCoincidence(acc, itm)
        , '')
}


const condense = string => string.replace(/(\S*)\s(?=\1)/g, '');

console.log(condense('puppy yup puppy puppy yup puppy puppy yup puppy puppy yup puppy puppy yup puppy puppy yup puppy'))
