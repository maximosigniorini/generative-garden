let tree = [];
let leaves = [];

let count = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    let a = createVector(width / 2, height);
    let b = createVector(width / 2, height - 100);
    let root = new Branch(a, b);

    tree[0] = root;
}

function grow() {
    if (count < 9) {
        for (let i = tree.length - 1; i >= 0; i--) {
            if (!tree[i].finished) {
                tree.push(tree[i].branchA());
                tree.push(tree[i].branchB());
            }
            tree[i].finished = true;
        }
        count++;

        // if (count === 6) {
        //     for (let i = 0; i < tree.length; i++) {
        //         if (!tree[i].finished) {
        //             let leaf = tree[i].end.copy();
        //             leaves.push(leaf);
        //         }
        //     }
        // }
    }
}

function draw() {
    clear()
    grow()
    for (let i = 0; i < tree.length; i++) {
        tree[i].show();
        tree[i].grow();
        //tree[i].jitter();
    }

    for (let i = 0; i < leaves.length; i++) {
        fill(255, 0, 100, 100);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 8, 8);
        leaves[i].y += random(0, 2);
    }
}