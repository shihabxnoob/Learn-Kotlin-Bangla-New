export interface Stage { id: string; order: number; title: string; description: string; }
// পরে এখানে `lessons` ও `slug` যোগ হবে; UI বদলাতে হবে না।
export const roadmap: Stage[] = [
  { id: 'fundamentals', order: 1, title: 'Fundamentals', description: 'ভ্যারিয়েবল, ডেটা টাইপ ও আপনার প্রথম প্রোগ্রাম।' },
  { id: 'control-flow', order: 2, title: 'Control Flow', description: 'if, when ও লুপ দিয়ে সিদ্ধান্ত নেওয়া ও কাজ পুনরাবৃত্তি।' },
  { id: 'functions', order: 3, title: 'Functions', description: 'ফাংশন, প্যারামিটার, default value ও lambda।' },
  { id: 'null-safety', order: 4, title: 'Null Safety', description: 'null-এর ঝামেলা এড়াতে Kotlin-এর নিরাপদ পদ্ধতি।' },
  { id: 'collections', order: 5, title: 'Collections', description: 'List, Set, Map এবং map/filter-এর মতো operation।' },
  { id: 'oop', order: 6, title: 'OOP', description: 'class, interface, data class ও inheritance।' },
  { id: 'advanced', order: 7, title: 'Advanced', description: 'coroutines, generics ও extension function।' },
];
