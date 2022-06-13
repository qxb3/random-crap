#!/bin/bash

frameCount=$(  find . -name *.png | wc -l )
while true; do
    for i in $( seq 0 $(( $frameCount - 1 )) ); do
        ascii-image-converter -C -c ./frames/rickroll-frame-$i.png --save-txt frames/ascii
        clear
    done
done
