<?php
namespace App\Model;

//defined('ABSPATH') or die;

class Slack
{
    const WEBHOOK_URL = 'https://hooks.slack.com/services/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';

    /**
     * Send a Message to a Slack Channel.
     *
     * @param string $message The message to post into a channel.
     * @return boolean
     */
     public static function message($message, $room = "#general", $icon = ":ghost", $username = "BOT")
     {
         $data = json_encode(array(
             "channel"       =>  $room,
             "text"          =>  $message,
             "icon_emoji"    =>  $icon,
             "username"      =>  $username
         ));

         $ch = curl_init(self::WEBHOOK_URL);
         curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
         curl_setopt($ch, CURLOPT_POSTFIELDS, array('payload' => $data));
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
         $result = curl_exec($ch);
         curl_close($ch);

         return $result;
     }
}
