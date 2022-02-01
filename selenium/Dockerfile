FROM selenium/standalone-chrome:3.141.59-20200730

FROM node:12

RUN  apt-get update && \
     apt-get upgrade -y && \
     apt-get install -y \
     net-tools \
     wget \
     unzip \
     curl \
     sudo \
	dos2unix \
     psmisc \
     network-manager-openvpn \
     apache2-utils 
     

RUN apt-get update

# RUN echo "deb http://deb.debian.org/debian/ unstable main contrib non-free" >> /etc/apt/sources.list.d/debian.list
# RUN apt-get update
# # RUN apt-get install -y --no-install-recommends firefox


ARG VPN_DIR=/etc/openvpn

COPY /vpn_node ${VPN_DIR}

WORKDIR ${VPN_DIR}

COPY openvpn.sh openvpn.sh
COPY markasdown.sh markasdown.sh
COPY bringback.sh bringback.sh
COPY startserver.sh startserver.sh
COPY ca.ipvanish.com.crt ca.ipvanish.com.crt
COPY start_script.sh start_script.sh

ENV REGION=''
ENV OVPNUSERNAME=''
ENV PASSWORD=''
ENV qaq='q'
RUN cd ..

RUN npm install

RUN dos2unix openvpn.sh
RUN dos2unix markasdown.sh
RUN dos2unix bringback.sh
RUN dos2unix startserver.sh

COPY ca.ipvanish.com.crt ca.ipvanish.com.crt

COPY /certs/ca.crt qar.crt
COPY /certs/vpnarea/ca.crt ca.crt
COPY /certs/vpnarea/casd.crt casd.crt

WORKDIR /


RUN sudo apt update
RUN sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev -y
RUN wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz 
RUN tar -xf Python-3.8.0.tgz 

RUN cd Python-3.8.0 \
     && ./configure --enable-optimizations \
     && make -j 8 \
     && sudo make altinstall 

RUN wget https://bootstrap.pypa.io/get-pip.py
RUN python3.8 get-pip.py


RUN pip3 install requests 
RUN pip3 install selenium 
RUN pip3 install pyyaml 

CMD ["/etc/openvpn/startserver.sh"]

FROM selenium/node-chrome-debug:3.141.59-20200826
USER root

COPY --from=1 / .
COPY --from=0 / .

COPY entry_point.sh /opt/bin/

RUN sudo apt-get update 
RUN sudo apt-get install psmisc
RUN sudo apt-get install dos2unix
RUN sudo dos2unix /opt/bin/entry_point.sh

# RUN wget https://github.com/mozilla/geckodriver/releases/download/v0.24.0/geckodriver-v0.24.0-linux64.tar.gz 
# RUN tar -xvzf geckodriver-v0.24.0-linux64.tar.gz 
# RUN mv geckodriver /bin/ 
# RUN chmod +x /bin/geckodriver 
# RUN export PATH=$PATH:/bin/geckodriver

RUN sudo perl -pi -e 's/cdc_/dog_/g' /usr/bin/geckodriver

USER 1200
CMD ["/opt/bin/entry_point.sh"]