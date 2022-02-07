import gulp from "gulp";

let minState = '';

gulp.task("watcher", () =>
    new Promise((res, rej) => {
        gulp.watch(["./src/pug/**/*.pug"], gulp.series("pug", "validateHtml"));
        gulp.watch("./src/sass/**/*.{scss,sass}", gulp.series("styles"+minState));
        gulp.watch("./src/fonts/**/*", gulp.series("fonts"));
        gulp.watch(["./src/images/**/*", "!./src/images/sprite-*/**/*", "!./src/images/favicons/**/*"], gulp.series("images"));
        gulp.watch("./src/images/sprite-svg/*.svg", gulp.series("sprite"));
        gulp.watch("./src/js/**/*.{js,json}", gulp.series("scripts"+minState));
        gulp.watch("./src/html_direct_copying/**/*", gulp.series("html_direct_copying"));
        res();
    })
);

gulp.task("watcher_min", () => {
    minState = '_min';
    return gulp.series("watcher")();
});
gulp.task("watcher_unmin", () => {
    minState = '_unmin';
    return gulp.series("watcher")();
});