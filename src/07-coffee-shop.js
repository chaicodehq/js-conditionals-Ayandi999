/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Edge cases
  let sizeList=["small", "medium","large"]
  let typeList=["regular", "latte", "cappuccino","mocha"]
  if(!sizeList.includes(size) || !typeList.includes(type)) return -1;

  let payableAmount=0
  //assigning amount based on size
  if(size==="small") payableAmount=3
  else if(size==="medium") payableAmount=4
  else payableAmount=5

  //adding charges for toppings:
  if(type==="latte") payableAmount+=1
  else if(type==='cappuccino') payableAmount+=1.5
  else if(type==='mocha') payableAmount+=2

  //ading charges for optionalt extras:
  if(extras.extraShot) payableAmount+=0.75
  if(extras.whippedCream) payableAmount+=0.5

  return payableAmount;

}
