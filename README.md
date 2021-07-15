This repo demonstrates one method of using Turbo and Stimulus to handle forms submitted from a modal. 

Stimulus is used to open and close the modal, while turbo_frames and turbo_streams handle updating the DOM.

## Project setup

After cloning this repo:

```
bundle install
rails db:create && db:migrate
```

After setup, visit http://localhost:3000/comments to test out the functionality.

A complete explanation of the code in this repo is available at [https://colby.so/posts/handling-modal-forms-with-rails-and-hotwire](https://colby.so/posts/handling-modal-forms-with-rails-and-hotwire/)
