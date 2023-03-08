/* 
    Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.
*/

const friends = ['javascript','python','c','c++','java']

const evenFriendsWithLength = arr =>{
    const evens = []
    for (const friendName of arr) {
        if(friendName.length % 2 === 0){
            evens.push({friendName,length: friendName.length})
        }
    }

    return evens
}

console.log(evenFriendsWithLength(friends));