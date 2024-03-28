function Rectangle(l, t, r, b) {
    this.left = l;
    this.top = t;
    this.right = r;
    this.bottom = b;
    this.Width = () => this.right - this.left;
    this.Height = () => this.bottom - this.top;
    return this;
}

export {Rectangle as rect}