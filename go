#!/bin/bash
export NODE_PATH=$NODE_PATH:../FeatureTester/libs/
node ../FeatureTester/src/main.js ./scan_list ./out
