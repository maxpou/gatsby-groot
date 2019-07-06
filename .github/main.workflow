workflow "Build, Test and Lint" {
  resolves = ["Format"]
  on = "push"
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "Format" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "format"
}
