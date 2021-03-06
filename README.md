# Futura Server

This project is a server for multiple DIY devices that I am working on.
It handles connecting to the device over the network and sending informations to various apis like SteamVR, or SRanipal
It currently supports:

 - Futura Face Tracker
 - Futura Controller (WIP)

## How to install

[Go to the releases section](https://github.com/Futurabeast/futura-server/releases) and grab the latest version of the server.
You will get a warning from Windows because this project does not have any cerificates.
Just click the "More info" button then "Run anyway"

After that the server shoud automaticly update when new content is added.


# Futura Face Tracker

The futura face tracker is a DIY and completely open-source Face tracker inspired by the Vive Face tracker
It uses an ESP-CAM module at its core to record your mouth below the headset.

![View of the tracker on a quest](readme_assets/facetrackerheadset.jpg?raw=true)

##  How does it works ?

The ESPcam module records your mouth and sends the images, wirelessly,  to a Deep Learning Neural network
that will analyse your mouth shape and predict the mouth blendshapes.

###  What is a blendshape ?

A blendshape is an animation property that is part of a 3d model. For example the `jawleft` blendshapes
will move the jaw to the left with all itermediary poses between 0 and 1

![View of the tracker on a quest](readme_assets/blendshape.gif)


### Disclamer

**This project is in heavy developement and is currently not finished. The AI is not ready and the server does not send any data to games like VRChat.**

### How can I build one ?

Parts list:
 - 1x ESP CAM module
 - 1x WS2812 LED (only need one)
 - 1x Usb battery
 - 1x Usb cable/header to solder on
 - (Recomended) 3d printer to print the attachments and cases for the module

Here is a wirering diagram on how to build it:

![Wirering diagram](readme_assets/FaceTrackerWirering_bb.png?raw=true)

There is also 3d models for attaching the tracker to the headset.

Currently supports:
 - [Quest 2](https://github.com/Futurabeast/FaceTrackerAssets/tree/main/Quest2)



### How to upload the firmware on the module ?

The Server has a menu where you can upload the firmware from via usb.
You might require a driver for the ESP-CAM module, so it can be detected as a serial device by the computer

You will find the firmware source code [here](https://github.com/Futurabeast/futura-face-cam)

### How to connect the tracker to the server ?

After you install the firmware, the tracker shoud make a wireless hotspot. Connect to it with a phone
and insert your home wireless credentials into it. The tracker shoud then connet to your network.
If the tracker is connected it shoud be listed in the Server's devices list.

### How to help ?

We need testing datasets. In the server there is a tool to record data.
This tool will generate random faces and you will have to reproduce the pose and take a picture.
By doing that, you will create a small dataset that you can send to us, so we can train the AI more.

We also need more attachments for differents kind of headsets, like HTC vive, Valve index ....
if you know how to do 3d models, please send the files to us!



# Futura Controllers

Extensions for the quest controllers to add capacitive touch on the grip.

WIP
