module.exports = {
  '*.ts': filenames => {
    const nonDistFiles = filenames.filter(file => !file.includes('dist/'));
    return nonDistFiles.length
      ? [
          `eslint --fix ${nonDistFiles.join(' ')}`,
          `prettier --write ${nonDistFiles.join(' ')}`,
        ]
      : [];
  },
  '*.scss': filenames => {
    const nonDistFiles = filenames.filter(file => !file.includes('/dist/'));
    return nonDistFiles.length ? `stylelint --fix ${nonDistFiles.join(' ')}` : 'true';
  },
  '*.{html,css,js,json,md,yml}': filenames => {
    const nonDistFiles = filenames.filter(file => !file.includes('dist/'));
    return nonDistFiles.length ? `git add ${nonDistFiles.join(' ')}` : 'true';
  }
};