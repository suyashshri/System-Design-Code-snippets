// --- Strategy interfaces ---
interface WalkBehaviour {
  walk(): void;
}

interface TalkBehaviour {
  talk(): void;
}

interface FlyBehaviour {
  fly(): void;
}

// --- Concrete Walk strategies ---
class NormalWalk implements WalkBehaviour {
  walk(): void {
    console.log("Walking normally...");
  }
}

class NoWalk implements WalkBehaviour {
  walk(): void {
    console.log("No walk...");
  }
}

// --- Concrete Talk strategies ---
class NormalTalk implements TalkBehaviour {
  talk(): void {
    console.log("Talk normally...");
  }
}

class NoTalk implements TalkBehaviour {
  talk(): void {
    console.log("No Talk...");
  }
}

// --- Concrete Fly strategies ---
class NormalFly implements FlyBehaviour {
  fly(): void {
    console.log("Fly normally...");
  }
}

class NoFly implements FlyBehaviour {
  fly(): void {
    console.log("No Fly...");
  }
}

// --- Robot base class (composition of behaviors) ---
abstract class Robot {
  private walkBehave: WalkBehaviour;
  private talkBehave: TalkBehaviour;
  private flyBehave: FlyBehaviour;

  constructor(w: WalkBehaviour, t: TalkBehaviour, f: FlyBehaviour) {
    this.walkBehave = w;
    this.talkBehave = t;
    this.flyBehave = f;
  }

  walk(): void {
    this.walkBehave.walk();
  }

  talk(): void {
    this.talkBehave.talk();
  }

  fly(): void {
    this.flyBehave.fly();
  }

  setWalk(b: WalkBehaviour): void {
    this.walkBehave = b;
  }

  setTalk(b: TalkBehaviour): void {
    this.talkBehave = b;
  }

  setFly(b: FlyBehaviour): void {
    this.flyBehave = b;
  }

  abstract projection(): void; // robot-specific info
}

// --- Concrete Robot types ---
class CompanionRobot extends Robot {
  projection() {
    console.log("Displaying friendly companion features...");
  }
}

class WorkerRobot extends Robot {
  projection() {
    console.log("Displaying worker efficiency stats...");
  }
}

// --- Usage / demo ---
const robot1 = new CompanionRobot(
  new NormalWalk(),
  new NormalTalk(),
  new NoFly()
);
robot1.walk(); // Walking normally...
robot1.talk(); // Talking normally...
robot1.fly(); // Cannot fly.
robot1.projection(); // Displaying friendly companion features...

console.log("--------------------");

const robot2 = new WorkerRobot(new NoWalk(), new NoTalk(), new NormalFly());
robot2.walk(); // Cannot walk.
robot2.talk(); // Cannot talk.
robot2.fly(); // Flying normally...
robot2.projection(); // Displaying worker efficiency stats...

// Demonstrate runtime behavior change:
console.log("--- Change behavior at runtime ---");
robot2.setWalk(new NormalWalk());
robot2.walk(); // Walking normally...
