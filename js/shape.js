class Shape {
    constructor(fillcolor, backcolor, initials) {
        this.fillcolor = fillcolor;
        this.backcolor = backcolor;
        this.initials = initials;
    }
}

class Circle extends Shape {
    constructor(fillcolor, backcolor, initials) {
        super(fillcolor, backcolor, initials);
    }
    render() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
                <circle cx="150" cy="100" r="80" fill=${this.fillcolor} />
        
                <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.backcolor}>${this.initials}</text>
        
            </svg>`;
    }
}

class Triangle extends Shape {
    constructor(logoWrite) {
        super(fillcolor, backcolor, initials)
        this.logoWrite = logoWrite + `
        <polygon points="70,180 230,180 150,20" fill=${this.fillcolor} />

        <text x="150" y="175" font-size="60" text-anchor="middle" fill=${this.backcolor}>${this.initials}</text>
  
    </svg>`
    }
}

class Square extends Shape {
    constructor(logoWrite) {
        super(fillcolor, backcolor, initials)
        this.logoWrite = logoWrite + `
        <polygon points="70,20 70,180 230,180 230,20" fill=${this.fillcolor} />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill=${this.backcolor}>${this.initials}</text>
  
    </svg>`
    }
}

module.exports = Shape, Square, Circle, Triangle;