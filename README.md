# photoshop-jsx
A JSX Photoshop CC 2019 based script for replacing images and text , also saves a .jpg file and a .psd file in the result folder. Takes text input from a .json file

1. [Video demo](#video-demo-click-image)
2. [How to use](#how-to-use)

# Video demo (Click Image)
[![](assets/thumb.png)](https://youtu.be/qKsxW6evvdY "Youtube link showing how to replace texts in photoshop using this script")

# How to use

Say you want to generate Participant Certificates using this script in photoshop 2019 CC or similar:

1. Open photoshop and add folders/group with names "text" and "baseImage". 
2. Create the desired background for the Certificate inside the baseImage folder:
![](assets/baseimage.png)

3. Inside "text" Title Group(or folder) add the "participantName" text layer and place it on the desired position and appropriate text size. We will use the script to change this text.

4. Download the script from https://github.com/avialxee/photoshop-jsx 

    by clicking Code > Download Zip

5. Unzip the folder to a desired location.
6. Open `input.json` file in your favourite text editor and replace the values corrosponding to name. 
    ```json
    {
    "name": ["Avinash Kumar", "Lorem Ipsum"]
    }
    ```
7. Run the script following the [demo](https://youtu.be/qKsxW6evvdY "Youtube link showing how to replace texts in photoshop using this script") or follow the following:
    - File > Scripts > Browse and select the `autotype.jsx` file found in the unzipped folder.
    ![Photoshop screenshot File > Scripts > Browse](assets/open_scriptfile.png)