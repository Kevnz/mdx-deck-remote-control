# mdx-deck-remote-control

Component that allows you to remote control an MDX Deck presentation

```
npm install mdx-deck-remote-control
```

Then in your theme.js file

```jsx

const Provider = props => (
  <RemoteControl
    next={props.next}
    previous={props.previous}
    goto={props.goto}
    url="websocket-server"
    path="listen-here"
  />
)

export default {
  Provider,
  ...theme
}

```

For more information [this post](https://dev.to/kevnz/remote-control-an-mdx-deck-presentation-1gmm)

