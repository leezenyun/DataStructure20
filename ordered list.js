class OrderedList extends Array {
    constructor(...args) {
        // Pass arguments to the parent class (Array)
        super(...args);

        // Ensure the list is sorted initially
        this.sort();
    }

    // Add an element and keep the list sorted
    add(element) {
        // Use binary search to find the insertion point
        let left = 0;
        let right = this.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this[mid] < element) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Insert the element at the found index
        this.splice(left, 0, element);
    }

    // Binary search to find an element
    search(element) {
        let left = 0;
        let right = this.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (this[mid] === element) {
                // Element found
                return mid;
            } else if (this[mid] < element) {
                // Search in the right half
                left = mid + 1;
            } else {
                // Search in the left half
                right = mid - 1;
            }
        }

        // Element not found
        return -1;
    }
}

// Example usage
const orderedList = new OrderedList(1, 3, 5, 7, 9);

console.log("Initial ordered list:", orderedList);

// Add elements
orderedList.add(4);
orderedList.add(2);
orderedList.add(8);

console.log("After adding elements:", orderedList);

// Search for elements
console.log("Index of element 5:", orderedList.search(8)); // Should return the index of 5
console.log("Index of element 6:", orderedList.search(6)); // Should return -1 (not found)