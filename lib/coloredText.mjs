class coloredText {
    constructor(text, x, y, font) {
        this.text = text; // Custom text schema
        this.x = x;
        this.y = y;
        this.font = font;
    }

    paint(ctx) {

        let x = this.x;
        let y = this.y;

        ctx.save();

        // Fill text with color 
        this.text.forEach(({ text, color }) => {

            // Set up properties
            ctx.fillStyle = color;
            ctx.font = this.font;

            // Fill the text
            ctx.fillText(text, x, y);

            // Add offset
            x += ctx.measureText(text).width;
        });

        ctx.restore();
    }

    getTotalWidth(ctx) {

        let totalWidth = 0;

        // Add up the width of each word
        this.text.forEach(({ text }) => {
            totalWidth += ctx.measureText(text).width;
        });

        return totalWidth;
    }
}

export default coloredText;