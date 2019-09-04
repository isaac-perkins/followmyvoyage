<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;

abstract class Controller extends ContainerAwareController
{
    use ControllerTrait;
    use RouterTrait;
    use SecurityTrait;

    protected function flash($name, $message)
    {
        $this->container['flash']->addMessage($name, $message);
    }

    protected function render(Response $response, $template, array $params = [])
    {
        return $this->container['twig']->render($response, $template, $params);
    }


}
