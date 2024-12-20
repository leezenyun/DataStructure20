// 定义二叉树节点
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 从前序和中序序列复原二叉树
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    // 前序遍历的第一个元素是根节点
    const rootValue = preorder[0];
    const root = new TreeNode(rootValue);

    // 找到根节点在中序遍历中的位置
    const rootIndex = inorder.indexOf(rootValue);

    // 切割前序和中序数组
    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);

    const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
    const rightPreorder = preorder.slice(1 + leftInorder.length);

    // 递归构建左右子树
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
}

// 从后序和中序序列复原二叉树
function buildTreeFromPostAndIn(postorder, inorder) {
    if (!postorder.length || !inorder.length) {
        return null;
    }

    // 后序遍历的最后一个元素是根节点
    const rootValue = postorder[postorder.length - 1];
    const root = new TreeNode(rootValue);

    // 找到根节点在中序遍历中的位置
    const rootIndex = inorder.indexOf(rootValue);

    // 切割后序和中序数组
    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);

    const leftPostorder = postorder.slice(0, leftInorder.length);
    const rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);

    // 递归构建左右子树
    root.left = buildTreeFromPostAndIn(leftPostorder, leftInorder);
    root.right = buildTreeFromPostAndIn(rightPostorder, rightInorder);

    return root;
}

// 前序遍历
function preorderTraversal(node) {
    if (!node) return [];
    return [node.value, ...preorderTraversal(node.left), ...preorderTraversal(node.right)];
}

// 中序遍历
function inorderTraversal(node) {
    if (!node) return [];
    return [...inorderTraversal(node.left), node.value, ...inorderTraversal(node.right)];
}

// 后序遍历
function postorderTraversal(node) {
    if (!node) return [];
    return [...postorderTraversal(node.left), ...postorderTraversal(node.right), node.value];
}

// 打印二叉树样貌
function printTree(node, prefix = "", isLeft = true) {
    if (!node) return "";

    // 构建当前节点的输出
    let result = "";
    result += prefix;
    result += isLeft ? "├── " : "└── ";
    result += node.value + "\n";

    // 递归打印左右子树
    const nextPrefix = prefix + (isLeft ? "│   " : "    ");
    if (node.left || node.right) {
        if (node.left) {
            result += printTree(node.left, nextPrefix, true);
        }
        if (node.right) {
            result += printTree(node.right, nextPrefix, false);
        }
    }

    return result;
}

// Main 主程序
function main() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("请选择输入模式:");
    console.log("1. 前序和中序 (Preorder + Inorder)");
    console.log("2. 后序和中序 (Postorder + Inorder)");

    readline.question("请输入选项 (1或2): ", (option) => {
        if (option !== "1" && option !== "2") {
            console.log("无效输入，程序结束。");
            readline.close();
            return;
        }

        readline.question(
            "请输入遍历序列，以逗号分隔 (如: 3,9,20,15,7):\n前序/后序: ",
            (traversal1) => {
                readline.question("请输入中序遍历序列，以逗号分隔 (如: 9,3,15,20,7): ", (inorderInput) => {
                    const seq1 = traversal1.split(",").map((x) => parseInt(x.trim()));
                    const inorder = inorderInput.split(",").map((x) => parseInt(x.trim()));

                    let root;
                    if (option === "1") {
                        root = buildTree(seq1, inorder);
                    } else {
                        root = buildTreeFromPostAndIn(seq1, inorder);
                    }

                    console.log("\n二叉树已复原!");
                    console.log("二叉树样貌:\n");
                    console.log(printTree(root));

                    console.log("前序遍历:", preorderTraversal(root).join(", "));
                    console.log("中序遍历:", inorderTraversal(root).join(", "));
                    console.log("后序遍历:", postorderTraversal(root).join(", "));

                    readline.close();
                });
            }
        );
    });
}

// 运行主程序
main();