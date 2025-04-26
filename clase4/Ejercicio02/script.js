
for (let index = 1; index <= 20; index++) {
    if (index % 2 == 0) {
        continue
    }
    if (index == 15) {
        break
    }
    console.log(index);
}