import React from "react";
import Link from "next/link";
import { Li, SearchBarLink } from "../../../../common";

const Location = ({ location }) => {
  return (
    <Li color='#ffffff' padding='5px 0 5px 0'>
      <Link
        href={`/courses/location/[[...locationSlug]]`}
        as={`/courses/location/${location.slug}`}
      >
        <SearchBarLink
          color='#ffffff'
          fontSize='16px'
          fontWeight='500'
          lineHeight='28px'
          font='arboria'
        >
          {location.location_type.location_type} {location.location_name}
        </SearchBarLink>
      </Link>
    </Li>
  );
};

export default Location;
