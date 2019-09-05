<?php

namespace App\Controller;

use Awurth\Slim\Helper\Controller\Controller as Controller;
use Slim\Http\Request as Request;
use Slim\Http\Response as Response;
use App\Model\Slack;

class AppController extends Controller
{
    public function home(Request $request, Response $response)
    {
        $template = 'home';

        if(!$this->auth->check()) {
          $template = 'index';
        }

        return $this->render($response, "app/$template.twig");
    }

    public function map(Request $request, Response $response)
    {
        return $this->render($response, "app/map.twig");
    }

    public function subscribe(Request $request, Response $response)
    {
        $slack = Slack::message('FollowMy.Voyage. Subscribe:' . $request->getParam('email'));

        return $response->withJson([
          'slack' => $slack,
          'status' => (($slack == 'ok') ? 200:500)
        ]);
    }

    public function contact(Request $request, Response $response)
    {
        $slack = Slack::message('FollowMy.Voyage. Contact:' . $request->getParam('email') . "\n" . $request->getParam('message'));

        return $response->withJson([
          'slack' => $slack,
          'status' => (($slack == 'ok') ? 200:500)
        ]);
    }
}
