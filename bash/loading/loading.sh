#!/bin/bash

first=$(cat << "EOF"
   _
  | |
  | |
  | |
  |_|
EOF
)

second=$(cat << "EOF"
    __
   / /
  / /
 / /
/_/
EOF
)

third=$(cat << "EOF"

 ______
|______|
EOF
)

fourth=$(cat << "EOF"
__
\ \
 \ \
  \ \
   \_\
EOF
)

fifth=$(cat << "EOF"
   _
  | |
  | |
  | |
  |_|
EOF
)

sixth=$(cat << "EOF"
    __
   / /
  / /
 / /
/_/
EOF
)

seventh=$(cat << "EOF"

 ______
|______|
EOF
)

eighth=$(cat << "EOF"
__
\ \
 \ \
  \ \
   \_\
EOF
)

delay=0

while true; do
    clear
    echo "$first"
    sleep $delay
    clear
    echo "$second"
    sleep $delay
    clear
    echo "$third"
    sleep $delay
    clear
    echo "$fourth"
    sleep $delay
    clear
    echo "$fifth"
    sleep $delay
    clear
    echo "$sixth"
    sleep $delay
    clear
    echo "$seventh"
    sleep $delay
    clear
    echo "$eighth"
    sleep $delay
done
