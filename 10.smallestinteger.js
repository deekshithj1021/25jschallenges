//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallestNumber;

        for (let i = 0; i < args.length; i++) {
            const num = args[i];
            if (i == 0) {
                smallestNumber = num;
            }
            if (smallestNumber > num) {
                smallestNumber = num;
            }
        }
        return smallestNumber;
    }
}