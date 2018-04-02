import React, { PureComponent } from 'react';

import './PersonalDescription.css';

export default class PersonalDescription extends PureComponent {
  render() {
    return (
      <div className="PersonalDescription">
        <sub className="PersonalDescription__subtext">
          Gamer, Drummer, Programmer
        </sub>
        <ul className="PersonalDescription__list">
          <li>
            I&apos;m a huge fantasy nerd. I grew up playing RPGs and reading
            comic books. I&apos;m in love with the Dark Souls series.
          </li>
          <li>
            I&apos;ve been playing the Drums since I was in highschool. When I
            was younger I had a Tama, but currently I&apos;m rocking out on a
            Roland electric kit!
          </li>
          <li>
            I like to spend my spare time taking things apart on the web and
            figuring out how they work. I love writing and teaching others about
            Javascript.
          </li>
          <li>
            I live in Doylestown, PA (it&apos;s near Philly!) with my wonderful
            girlfriend, and my dog Pepe!
          </li>
        </ul>
      </div>
    );
  }
}
