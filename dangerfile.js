const diffSize = Math.max(danger.github.pr.additions, danger.github.pr.deletions);
if (diffSize > 200) {
    warn("Should reduce diffs less than 200");
    isAllCheckPassed = false;
}

// 変更したファイルの数が10より多いかどうか
if (danger.github.pr.changed_files > 10) {
    warn("Should reduce change files less than 10");
    isAllCheckPassed = false;
}
