#! /bin/bash

docker run -d --name totvs_dbaccess --network bridge -p 7890:7890 -p 7891:7891 matteokme/totvsprotheus2510:dbaccess2510