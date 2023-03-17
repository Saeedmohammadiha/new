export function getAllNames(data) {
  const logins = data.map((g) => {
    return g.Logins;
  });
  const loginNames = logins.flat(1);

  const offlines = data.map((g) => {
    return g.Offlines;
  });
  const offlineNames = offlines.flat(1);

  const allNames = loginNames.concat(offlineNames);
  return allNames;
}

/**
 * detects the number's of colums that table has
 * @param {Json}} data
 * @returns []
 */

export function columnsDetector(data) {
    const colomns = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].StartTime !== null) {
        colomns.push({
          StartTime: data[i].StartTime,
          EndTime: data[i].EndTime,
          Offlines: data[i].Offlines,
          ResponsibilityName: data[i].Offlines.ResponsibilityName,
          Number: data[i].Number,
          ShiftName: data[i].Logins.ShiftName,
        });
      }
    }
    return colomns;
  };