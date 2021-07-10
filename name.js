export default function name(name) {
  const [user, repo] = name.split('/');
  if (user !== 'shubham-vunet') {
    return `\n  [\`${name}\`](https://github.com/${name})`;
  }

  return `\n  [\`${repo}\`](https://github.com/${name})`;
}
