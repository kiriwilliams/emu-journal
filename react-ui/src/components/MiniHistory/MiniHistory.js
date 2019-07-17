import React, { Component } from "react";
import LineEntry from "../LineEntry/LineEntry";

export default function MiniHistory(props) {

    return (
        <div>
            {props.entries.length ? (
                <div>
                    {props.entries.map(entry => (
                        <LineEntry
                            key={entry._id}
                            noteID={entry._id}
                            date={entry.date}
                            moodtext={entry.mood}
                            moodcolor={entry.color}
                            textColor={entry.textColor}
                        >
                        </LineEntry>
                    ))}
                </div>
            ) : (
                    <h3 className="text-center">No Entries</h3>
                )}
        </div>

    );
}
