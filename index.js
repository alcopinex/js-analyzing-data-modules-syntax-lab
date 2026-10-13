require('datejs');

/**
 * Merges an indeterminate number of username arrays into a single object
 * containing the combined users array and the merge date.
 * 
 * @param {...Array<string>} args - Arrays of usernames
 * @returns {Object} An object containing the merged users and merge_date
 */
function combineUsers(...args) {
  // Step 2: Initialize the Return Object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and merge arrays using the spread operator
  for (let i = 0; i < args.length; i++) {
    combinedObject.users.push(...args[i]);
  }

  // Step 5: Get today's date in M/d/yyyy format using datejs
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

// Export the function so the test suite can import it
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};