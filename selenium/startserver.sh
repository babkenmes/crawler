set -e



# until curl -s --head  --request GET http://selenium-hub:4444 | grep "200 OK" > /dev/null; do
#   >&2 echo "selenium hub is unavailable - sleeping"
#   sleep 10
# done  

# sleep 10

sh /etc/openvpn/markasdown.sh
until curl -s --head  --request GET http://app:5000 | grep "200 OK" > /dev/null; do
  >&2 echo "web app is unavailable - sleeping"
  sleep 10
done

>&2 echo "web app and hub is up - starting inner serverchik"

python3.8 /etc/node_scripts/node_main_script.py &

PORT=5000 node /etc/openvpn/server.js

