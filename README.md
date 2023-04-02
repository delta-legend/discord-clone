This is my $1M dollar website.

## How to use CSS files in next js

- Make [filename].module.css in `/styles` folder
- import in any component by

```js
import styles from "../styles/[filename]].module.css
```

- Apply class by to a tag by -

```js
<div className={styles.red}>Company name is {name}</div>
```
