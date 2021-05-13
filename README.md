# Gardener

The official DogeHouse.js bot &amp; dashboard for DogeHouse.tv.

#### Built using dogehouse.js

<hr>

## How to host locally:

- Clone this repo using :

```bash
$git clone https://github.com/dogegarden/gardener.git
```

- Then run:

```bash
$cd gardener
```

- Open example.env
- Fill in the details :-

  - DOGEHOUSE_TOKEN - Your Access Token
  - DOGEHOUSE_REFRESH_TOKEN - Your Refresh Token
  - ROOM_ID - The ID of your room

- Rename example.env to .env

- Run:

```bash
$node index.js
```

<hr>

## Commands:

#### Remember: The commands will be updated based on need and will also be updated here

- ##### General Commands:

  - !cats - Gives a link to a random image of a cat based on the api
  - !help - Pushes a link to the help.md on github

- ##### Math Commands:

  - !math - Does a math problem
  - Arguments - num1 operator num2

  - All operations :
  - Addition - Ex. !math 5 + 9
  - Subtraction - Ex. !math 6 - 3
  - Division - Ex. !math 9 / 3
  - Multiplication - Ex. !math 8 \* 234
  - Square root - Ex. !math sqrt 225

- ##### Moderation Commands [ For moderators and admin of the room only]:

  - !ban_chat - Bans a user from chat
    - Arguments - Username, Duration [ in minutes] and reason
    - Example - !ban_chat @user 5 For abusing <br><br>
  - !ban_room - Bans a user from the room
    - Arguments - Username, Duration [ in minutes] and reason
    - Example - !ban_room @user 5 For abusing
  - [Coming soon] !ban_ip - Bans a user from the ip <br><br>
    - Arguments - Username, Duration [ in minutes] and reason
    - Example - !ip_ban @user 5 For abusing <br><br>
  - !mute - Mutes a user [if the user is a speaker ]
    - Arguments - Username, Duration [ in minutes] and reason
    - Example - !mute @user 5 For abusing <br><br>
  - !unban_chat - Unbans a user from chat
    - Arguments - Username <br> <br>
  - !unban_room - Unbans a user from the room
    - Arguments - Username <br> <br>

- ##### News:

  - !news - Gives the top headline of CNN

- ##### Covid:

  - !covid <country> - Gives the covid stats of a country

- ##### Music:
  - !play - Plays a song [dj only - coming soon]
    - Arguments - URL Of the Song <br> <br>
  - !pause - Pauses a song <br> <br>
  - !resume - Resumes the song <br> <br>
  - !stop - Stops the queue <br> <br>
  - !queue - Displays the queue of songs <br> <br>
  - !clear - Clears queue

<hr>
