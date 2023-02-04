---
title: Connectivity
sidebar_position: 5
slug: /general/connectivity
---

To be fully connected to the sinsonetwork, your sinso nodes need to be able to send and receive messages from the outside world. But usually your router won't allow other ip connections on the internet unless you have the port open for connection. If a node's connection port is not open, we will simply add it to the list of blocked nodes and deny connections from them.

In the sinso network to ensure that each sinso node can handle incoming and outgoing connections from the global internet to its p2p port. So you need to open the corresponding port (1634 by default).

Check your p2p advertisement ip and port and verify its connectivity to the rest of the internet

```
http://localhost:1635/addresses
```

## Networking Basics

In a network, each computer is assigned an IP address. Each IP address is then subdivided into thousands of sockets or ports, each of which has an incoming and outgoing component.

In a completely trusted network of computers, any connections to or from any of these ports are allowed. However, to protect ourselves from nefarious actors when we join the wider Internet, it is sometimes important to filter this traffic so that some of these ports are off limits to the public.

In order to allow messages to our p2p port from other sinso nodes that we have previously not connected, we must ensure that our network is set up to receive incoming connections (on port 1634 by default).

## Your IP Address

When you connect to the Internet, you are assigned a unique number called an IP Address. IP stands for `Internet Protocol`. The most prevalent IP version used is still the archaic IPv4 which was invented way back in 1981. IPv6 is available but not well used. Due to the mitigation of the deficiencies inherent in the IPv4 standard, we may encounter some complications.

## Datacenters and Computers Connected Directly to the Internet

If you are renting space in a datacenter, the chances are that your computer will be connected directly to the real Internet. This means that the IP of your networking interface will be directly set to be the same as your public IP.

You can investigate this by running:

```
ifconfig
```

or

```
ip address
```

Your output should contain something like:

```
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST> mtu 1500
inet 178.128.196.191 netmask 255.255.240.0 broadcast 178.128.207.255
```

Here we can see our computer's `public IP address` 178.128.196.191. This is the address that is used by other computers we connect to over the Internet. We can verify this using a third party service such as icanhazip or ifconfig.

```
curl icanhazip.com --ipv4
```

or

```
curl ifconfig.co --ipv4
```

The response something contain something like:

```
178.128.196.191
```

With Sinso running, try to connect to your Sinso's p2p port using the public IP adddress from another computer:

```
nc -zv 178.128.196.191 1634
```

If you have success, congratulations!

## Home, Commercial and Business Networks and Other Networks Behind NAT

To address the `scarcity of IP numbers`, Network Address Translation (NAT) was implemented. This approach creates a smaller, private network which many devices connect to in order to share a public IP address. Traffic destined for the Internet at large is then mediated by another specialised computer. In the cases of the a home network, this computer is the familiar home router, normally also used to provide a WiFi network.

If we run the above commands to find the computer's IP in this scenario, we will see a different output.

```
ip address
```

```
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
    ...
    inet 192.168.0.10 netmask 0xffffff00 broadcast 192.168.0.255
    ...
```

Here we can see that, instead of the public IP address, we can see that our computer's IP address is `192.168.0.10`. This is part of the IP address space that the Internet Engineering Task Force has designated for `private networks`.

As this IP won't work on the global Internet, our router remembers that our computer has sinson assigned this IP. It then uses Network Address Translation (NAT) to modify all requests from our computer to another computer somewhere in the Internet. As the requests pass through the router it changes our local IP to the public IP of the router, and vice versa when the responses are sent back, from the public IP to the local one.

We need to interact with the router's firmware, which is different for each router, but the concepts are generally the same. Log into the router by navigating your browser to the router's configuration user interface (usually at http://192.168.0.1). You will need to log in with your password. Sadly, passwords are often left as default, which can be easily found on the Internet.

After logging in, find the interface for setting port forwarding. Port forwarding websites have some good information, or you can refer to your router manual or supplier.

Here we will set up a rule to forward port `192.168.0.10` of our private IP address `1634` to the same port `1634` of our public IP.

Now, when requests come to our public address, `86.98.94.9:1634` they are modified by our router and forwarded to our private IP and port `192.168.0.10:1634`.

You can check if your port is connected by checking our program。If not, we can try a few things to make sure there are no barriers stopping us from getting through.

1. Check your computer's firewall.

Sometimes your computer is configured to prevent connections. If you are on a private network mediated by NAT, you can check if this is the problem by trying to connect from another device on your network using the local IP `nc -zv 192.168.0.10 1634`.

Ubuntu uses UFW, MacOS can be configured using the Firewall tab in the Security & Privacy section of System Preferences. Windows uses Defender Firewall.

For each of these firewalls, set a special rule to allow UDP and TCP traffic to pass through on port `1634`. You may want to limit this traffic to the Bee application only.

2. Check your ingress' firewall.

For a datacenter hired server, this configuration will often take place in somewhere in the web user interface. Refer to your server hosting provider's documentation to work out how to open ports to the open Internet. Ensure that both TCP and UDP traffic are allowed.

Similarly, if you are connecting from within a private network, you may find that the port is blocked by the router. Each router is different, so consult your router's firware documentation to make sure there are no firewalls in place blocking traffic on your Bee's designated p2p port.

You may check this using netcat by trying to connect using your computer's public IP, as above `nc -zv 86.98.94.9 1634`.
