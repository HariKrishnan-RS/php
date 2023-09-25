<?php
class Sell{
	private $name = "";
	public function __construct($name){
	$this->name = $name;
	}

	public function sellCar($nmame){
		echo "</br>".$this->name." is sold";
	}
}

?>
