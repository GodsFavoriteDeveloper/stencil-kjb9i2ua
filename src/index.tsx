/* @jsx h */
import { h, Component, State, Host } from "@stencil/core";

@Component({
  tag: "my-counter",
  styleUrl: "index.css",
  shadow: true,
})
export class MyCounter {
  @State() count: number = 2;

  inc() {
    if (this.count < 10)
    this.count++;
  }

  dec() {
    if (this.count > 0)
    this.count--;
  }

  render() {
    return (
      <Host>
        <button onClick={this.dec.bind(this)}>-</button>
        <span>{this.count}</span>
        <button onClick={this.inc.bind(this)}>+</button>
      </Host>
    );
  }
}
