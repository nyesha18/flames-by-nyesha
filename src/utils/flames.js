export function calculateFlames(name1, name2) {

    // Remove spaces and convert to lowercase
    let first = name1.toLowerCase().replace(/\s/g, "").split("");
    let second = name2.toLowerCase().replace(/\s/g, "").split("");

    // Remove common letters
    for (let i = 0; i < first.length; i++) {

        let index = second.indexOf(first[i]);

        if (index !== -1) {
            first.splice(i, 1);
            second.splice(index, 1);
            i--;
        }
    }

    const count = first.length + second.length;

    const flames = ["F", "L", "A", "M", "E", "S"];

    let index = 0;

    while (flames.length > 1) {

        index = (index + count - 1) % flames.length;

        flames.splice(index, 1);
    }

  return {
    letter: flames[0],
    remainingCount: count
};
}