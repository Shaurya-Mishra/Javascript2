const roadmap = new Set();
roadmap.add('JavaScript');
roadmap.add('JavaScript');

roadmap.add('dynamic');
roadmap.add(1995);

console.log(roadmap.size); // 3, because the value 'JavaScript' is already present in the set
console.log(roadmap.has('JavaScript')); // true

roadmap.delete('JavaScript');
console.log(roadmap.has('JavaScript')); // false
console.log(roadmap.size); // 2