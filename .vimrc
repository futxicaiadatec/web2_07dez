set nocompatible                " choose no compatibility with legacy vi
syntax enable
set encoding=utf-8
set showcmd                     " display incomplete commands
filetype plugin indent on       " load file type plugins + indentation

"" Whitespace
set nowrap                      " don't wrap lines
set tabstop=2 shiftwidth=2      " a tab is two spaces (or set this to 4)
set expandtab                   " use spaces, not tabs (optional)
set backspace=indent,eol,start  " backspace through everything in insert mode

"" Searching
set hlsearch                    " highlight matches
set incsearch                   " incremental searching
set ignorecase                  " searches are case insensitive...
set smartcase                   " ... unless they contain at least one capital letter

"" https://mislav.net/2011/12/vim-revisited/

set modelines=0
set softtabstop=2
set autoindent
set ruler
set showcmd
set hidden
set wildmenu
set ttyfast
set scrolloff=5
set number
"" http://stevelosh.com/blog/2010/09/coming-home-to-vim/
